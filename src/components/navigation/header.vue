<template>
  <header>
    <div class="container header_container">
      <div class="logo">
        <router-link :to="{ name: 'home' }">Game Source</router-link>
      </div>
      <div>
        <ul>
          <li><router-link :to="{ name: 'signin' }"> Sign In </router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>
