export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-home',
    },    
    {
      title: true,
      name: 'Anúncio',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Criar',
      url: '/create',
      icon: 'icon-pencil',
    },
    {
      name: 'Listagem',
      url: '/list',
      icon: 'icon-list',
    }
  ],
};
