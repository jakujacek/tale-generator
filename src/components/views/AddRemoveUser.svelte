<script>
    import { users } from '../../stores/stores.js';
    import { onDestroy } from 'svelte';
    import { fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let nameVal = '';
    let usersValue;

    const unsubscribe = users.subscribe(users => {
        usersValue = users;
        
        const usersStringified = usersValue.map(user => {
            return JSON.stringify(user);
        });

        localStorage.setItem('users', usersStringified.join(';'));
    })

    function addUser(name) {
        if (!!name && !userAlreadyExist(name)) {
            users.set ([...usersValue, {
                name: name
            }])
            clearInput();
        }
    }

    function addUserIfEnter(event) {
        if(event.keyCode === 13) {
            addUser(nameVal);
            clearInput();
        }
    }

    function removeUser(name) {
        const updatedUsers = usersValue.filter(user => user.name !== name);
        users.set([...updatedUsers]);
    }

    function userAlreadyExist(name) {
        return !!(usersValue.find(el => { return el.name === name }));
    }

    function clearInput() {
        nameVal = '';
    }

    onDestroy(unsubscribe);
</script>

<div>
    <input type="text"
           bind:value={nameVal}
           on:keypress={addUserIfEnter}
           placeholder="Wpisz imię gracza">
    <button on:click={addUser(nameVal)}>Dodaj gracza</button>
</div>

{#if usersValue.length}
<ul>
{#each usersValue as user (user.name)}
    <li animate:flip
        in:fly="{{ y: 50, duration: 200 }}"
        out:fly="{{x: -50, duration: 200}}">
            {user.name} 
            <button on:click={removeUser(user.name)}>Usuń</button>
    </li>
{/each}
</ul>
{/if}


<style>
    li {
        text-align: left;
    }
</style>