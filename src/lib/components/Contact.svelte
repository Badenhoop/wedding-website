<script lang="ts">

</script>


<section class="contact bg-white px-4 lg:px-8 py-24 lg:py-48 flex flex-col items-center">
  <h1 class="font-script text-6xl lg:text-8xl text-center">Rückmeldung</h1>
  <div class="h-8 lg:h-16"></div>
  <form class="flex flex-col items-start" action="https://formspree.io/f/xpzeppyq" method="POST">
    <label class="font-serif font-semibold text-left text-xl lg:text-2xl text-black" for="guest-names">NAMEN DER GÄSTE</label>
    <input class="px-2 font-serif text-left text-lg lg:text-xl text-black bg-white border-b-2 border-black my-6 w-full outline-none"
           id="guest-names" 
           type="text"
           name="Name der Gäste"
           required />
    <label class="font-serif font-semibold text-left text-xl lg:text-2xl text-black" for="email">E-MAIL</label>
    <input class="px-2 font-serif text-left text-lg lg:text-xl text-black bg-white border-b-2 border-black my-6 w-full outline-none" 
           id="email" 
           type="email" 
           name="E-Mail"
           required />
    <label class="font-serif font-semibold text-left text-xl lg:text-2xl text-black" for="phone-number">TELEFONNUMMER</label>
    <input class="px-2 font-serif text-left text-lg lg:text-xl text-black bg-white border-b-2 border-black my-6 w-full outline-none" 
           id="phone-number" 
           type="tel" 
            name="Telefonnummer"
           required />
    <label class="font-serif font-semibold text-left text-xl lg:text-2xl text-black" for="allergies">UNVERTRÄGLICHKEITEN</label>
    <input class="px-2 font-serif text-left text-lg lg:text-xl text-black bg-white border-b-2 border-black my-6 w-full outline-none"
           id="allergies" 
           type="text" 
           value="Keine"
           name="Unverträglichkeiten" />
    <label class="font-serif font-semibold text-left text-xl lg:text-2xl text-black" for="others">SONSTIGE WÜNSCHE UND ANREGUNGEN</label>
    <textarea class="px-2 font-serif text-left text-lg lg:text-xl text-black bg-white border-b-2 border-black my-6 w-full outline-none" 
              id="others" 
              rows="1" 
              value="Keine"
              name="Sonstige Wünsche und Anregungen" />

    <label class="flex flex-row items-center cursor-pointer" for="do-participate">
      <input id="do-participate" 
             type="radio" 
             name="Teilnahme" 
             value="Ja"
             checked />
      <div class="radiobox">
        <div class="radiomark"></div>
      </div>
      <div class="w-4"></div>
      <p class="font-serif text-left text-lg lg:text-2xl text-black">Ich bzw. wir kann (können) leider nicht teilnehmen.</p>
    </label>

    <label class="flex flex-row items-center cursor-pointer" for="dont-participate">
      <input id="dont-participate" 
             type="radio" 
             name="Teilnahme"
             value="Nein" />
      <div class="radiobox">
        <div class="radiomark"></div>
      </div>
      <div class="w-4"></div>
      <p class="font-serif text-left text-lg lg:text-2xl text-black">Ich bzw. wir möchte(n) teilnehmen.</p>
    </label>

    <div class="h-4 lg:h-8"></div>

    <label class="flex flex-row items-center cursor-pointer" for="come-with-children">
      <input id="come-with-children" 
             type="checkbox"
             name="Wir kommen mit Kindern" />
      <div class="checkbox">
        <div class="checkmark"></div>
      </div>
      <div class="w-4"></div>
      <p class="font-serif text-left text-lg lg:text-2xl text-black">Ich bzw. wir komme(n) mit Kind(ern).</p>
    </label>

    <div class="h-4 lg:h-8"></div>

    <label class="flex flex-row items-center cursor-pointer" for="privacy-policy">
      <input id="privacy-policy" 
             type="checkbox" 
             name="Zusage Datenschutzbestimmung"
             value="Ja"
             required />
      <div class="checkbox">
        <div class="checkmark"></div>
      </div>
      <div class="w-4"></div>
      <p class="font-serif text-left text-lg lg:text-2xl text-black">Hiermit akzeptiere ich die <a class="font-semibold underline" href="https://uply-app.com/privacy-policy/de">Datenschutzbestimmung</a>.</p>
    </label>
    <div class="h-4 lg:h-8"></div>
    <button class="font-serif font-semibold text-center text-lg lg:text-2xl text-white bg-blue rounded-lg px-4 py-2 lg:px-6 lg:py-4" type="submit">Absenden</button>
  </form>
</section>

<style>
  input[type="checkbox"],
  input[type="radio"] {
    @apply absolute opacity-0 cursor-pointer h-0 w-0;
  }

  .checkbox, .radiobox {
    @apply relative flex-shrink-0 flex-grow-0 h-6 w-6 bg-white border-2 border-black rounded-md;
  }

  .radiobox {
    @apply flex flex-row justify-center items-center;
  }

  input[type="checkbox"]:checked ~ .checkbox > .checkmark {
    @apply block;
  }

  input[type="radio"]:checked ~ .radiobox > .radiomark {
    @apply block;
  }

  .checkmark {
    @apply hidden absolute left-[0.5rem] top-[0.2rem] w-[0.4rem] h-[0.8rem] border-solid border-black border-r-[2px] border-b-[2px] rotate-45;
  }

  .radiomark {
    @apply hidden flex-shrink-0 flex-grow-0 w-[0.6rem] h-[0.6rem] bg-black rounded-full;
  }
</style>