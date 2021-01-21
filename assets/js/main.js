let app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    voceMenu : [
      {
        name: "Courses",
        about: "Masterstudy is Education WordPress theme feautred by Learning.",
        contact: "USA, California 20, First Avenue,California",
        page: "Blog",
      },
      {
        name: "Course Formats",
        about: "Management System (LMS) for online education.",
        contact: "Tel.: +1 212 458 300 32",
        page: "Home",
      },
      {
        name: "Add Course",
        about: "Developed by StylemixThemes. ",
        contact: "Fax: +1 212 375 24 14",
        page:"Shortcodes"
      },
      {
        name: "Pages",
        contact: "info@masterstudy.com",
        page: "Courses"
      },
      {
        name: "Demos",
        page:"Membership",
      },
      {
        page:"Typography"
      }
    ],

    blog : [
      {
        img: 'assets/img/zaino.jpeg',
        title: 'Our main target is to "Developing Yourself as a Leader"',
        data: "- August 9, 2018"
      },
      {
        img: 'assets/img/proiet.jpeg',
        title: "Those Other Collage Expensese You Aren't Thinking About",
        data: "- June 3, 2015"
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
        img: 'assets/img/termo.png',
        titolo: "Nvidia and UE4 Technologies Practice",
        tipo: "Nvidia",
        difficolta: "Advanced",
        quantita: "8 Lectures",
        durata: "6 hours",
        prezzo: "$56"
      },
      {
        img: 'assets/img/gambe.jpeg',
        titolo: "Fashion Photography from professional",
        tipo: "Fashion",
        difficolta: "Advanced",
        quantita: "6 Lectures",
        durata: "6 hours",
        prezzo: "$56"
      },
      {
        img: 'assets/img/band.jpeg',
        titolo: "Design Instruments for Communication",
        tipo: "Communication",
        difficolta: "Intermediate",
        quantita: "6 Lectures",
        durata: "6 hours",
        prezzo: "$43"
      },
      {
        img: 'assets/img/foglio.jpg',
        titolo: "Make your Concept Right and Beautiful",
        tipo: "Art",
        difficolta: "Intermediate",
        quantita: "Lectures",
        durata: "6 hours",
        prezzo: "$43"
      },
      {
        img: 'assets/img/bici.jpeg',
        titolo: "Road Bike Manual or How to Be a Champion",
        tipo: "Bicycling",
        difficolta: "Beginner",
        quantita: "6 Lectures",
        durata: "6 hours",
        prezzo: "$29"
      },
    ],

    avatar : [
      "assets/img/paolo.jpg",
      "assets/img/kevin.jpg",
      "assets/img/sara.jpg",
    ],


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
