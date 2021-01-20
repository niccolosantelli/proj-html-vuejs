let app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    voceMenu : [
      {
        name: "Courses",

      },
      {
        name: "Course Formats"
      },
      {
        name: "Add Course"
      },
      {
        name: "Pages"
      },
      {
        name: "Demos"
      }
    ],

    documents : [
      {
        img: 'assets/img/dj-1.jpeg',
        titolo: "How to be a DJ? Make Electronic Music",
        tipo: "Electronic",
        difficolta: "Advanced",
        quantita: "8 Lectures",
        durata: "6 hours",
        prezzo: "$56"

      },
      {
        img: 'assets/img/dj-1.jpeg',
        titolo: "How to be a DJ? Make Electronic Music",
        tipo: "Electronic",
        difficolta: "Advanced",
        quantita: "8 Lectures",
        durata: "6 hours",

      },
      {
        img: 'assets/img/dj-1.jpeg',
        titolo: "How to be a DJ? Make Electronic Music",
        tipo: "Electronic",
        difficolta: "Advanced",
        quantita: "8 Lectures",
        durata: "6 hours",

      },
      {
        img: 'assets/img/dj-1.jpeg',
        titolo: "How to be a DJ? Make Electronic Music",
        tipo: "Electronic",
        difficolta: "Advanced",
        quantita: "8 Lectures",
        durata: "6 hours",

      },
      {
        img: 'assets/img/dj-1.jpeg',
        titolo: "How to be a DJ? Make Electronic Music",
        tipo: "Electronic",
        difficolta: "Advanced",
        quantita: "8 Lectures",
        durata: "6 hours",

      },
      {
        img: 'assets/img/dj-1.jpeg',
        titolo: "How to be a DJ? Make Electronic Music",
        tipo: "Electronic",
        difficolta: "Advanced",
        quantita: "8 Lectures",
        durata: "6 hours",

      },
    ],

    avatar : [
      "assets/img/paolo.jpg",
      "assets/img/kevin.jpg",
      "assets/img/sara.jpg",
    ]

  },

  methods: {
    nextImg(){
      this.counter++;
      if(this.counter == this.avatar.length){
        this.counter = 0;
      }
    },
    prevImg(){
      if(this.counter > 0){
        this.counter--
      } else {
        this.counter = this.avatar.length -1 ;
      }
    }
  }

})
