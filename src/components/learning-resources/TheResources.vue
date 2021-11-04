<template>
  <base-card>
    <button-element
      @click="setSelectedTab('stored-resources')"
      :mode="selectedTab === 'stored-resources' ? null : 'flat'"
    >Stored Resources</button-element>
    <button-element
      @click="setSelectedTab('add-resource')"
      :mode="selectedTab === 'add-resource' ? null : 'flat'"
    >Add Resource</button-element>
  </base-card>
  <!--  dynamic component, can be replaced with v-if v-else-->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';
export default {
  name: 'TheResources',
  components: {
    StoredResources,
    AddResource,
  },
  data(){
    return{
      selectedTab: 'stored-resources',
      storedResources:[
        { id: 'officia-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        { id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://vuejs.org'
        },
      ]
    };
  },
  provide(){
    return{
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    }
  },
  // computed:{
  //   storedButtonMode(){
  //     return this.selectedTab === 'stored-resources' ? null : 'flat';
  //   },
  //   addButtonMode(){
  //     return this.selectedTab === 'add-resource' ? null : 'flat';
  //   }
  // },
  methods:{
    setSelectedTab(tab){
        this.selectedTab = tab;
    },
    addResource(title, desc,url){
      const newResource ={
        id: new Date().toISOString(),
        title: title,
        desc: desc,
        url: url,
      }
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id){
        //filter will create a new array, can't be used with provide
      const resIndex = this.storedResources.findIndex( res => res.id === id);
      this.storedResources.splice(resIndex,1);
    }
  }
};
</script>

<style scoped>

</style>