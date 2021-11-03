<template>
  <section>
  <h2>My friends</h2>
  <ul>
    <li></li>
  </ul>
  </section>
</template>

<script>
export default {
  data(){
    return{
        friends: [
          {
            id: 'john',
            name: 'John Doe',
            phone: '53483764093',
            email: 'ramdom@email.com'
          },
          {
            id: 'kate',
            name: 'Kate Doe',
            phone: '543t3764093',
            email: 'kramdom@email.com'
          },
        ]
    }
  }
}
</script>