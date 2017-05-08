<template>
  <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <div id="profile" class="has-text-centered">
              <div class="portrait">
              </div>
              <div class="portrait-title">
                <h2>Qiang Guo</h2>
                <h3>Web, iOS developer, avid reader</h3>
              </div>
            </div> 
          </div>
          <div class="column">
            <h1 class="title">Biography</h1>
            <p>
            Lena Smith is a professor of artificial intelligence at the Stanford AI Lab. Her research interests include distributed robotics, mobile computing and programmable matter. She leads the Robotic Neurobiology group, which develops self-reconfiguring robots, systems of self-organizing robots, and mobile sensor networks.
            </p>
          </div>
        </div>
      </div>
  </section>

</template>

<style lang="scss">
  #profile {
    position: relative;

    .portrait {
      background-image: url('https://sourcethemes.com/academic/img/portrait.jpg');
      width: 200px;
      height: 200px;
      margin: 0 auto;
      border-radius: 5%;
      background-size: cover;
    }

    .portrait-title {
      h2 {
        font-size: 1.75em;
        font-weight: 300;
        color: #000;
        margin: 20px 0 10px 0;
      }

      h3 {
        font-size: 1.35em;
        font-weight: 300;
        color: #AAA;
        margin: 0px 0 10px 0
      }
    }
  }
</style>

