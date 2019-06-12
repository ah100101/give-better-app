<template>
      <div class="card post-card">
      
        <div class="card-image">
          <figure class="image is-3by2">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
      
        <div class="card-content">
          
          <div class="media">
            
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
            
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>

          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>

        </div>

    </div>
</template>

<script>
import * as fb from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDARWn6RERDqZeTY4BurHWlvIuzFABPbzo",
    authDomain: "bettergive-23113.firebaseapp.com",
    databaseURL: "https://bettergive-23113.firebaseio.com",
    projectId: "bettergive-23113",
    storageBucket: "bettergive-23113.appspot.com",
    messagingSenderId: "705969713313",
    appId: "1:705969713313:web:2fa1c985bcee83cb"
  };

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

if (!fb.apps.length) {
    fb.initializeApp(firebaseConfig);
}

console.log(fb)

// var db = fb.firestore()

export default {
  props: {
    // title: {
    //   type: String,
    //   required: true
    // },
    // icon: {
    //   type: String,
    //   required: true
    // }
  }
}
</script>
