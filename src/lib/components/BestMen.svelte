<script lang="ts">
  const tonyText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br><br>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?<br><br><b>toni.boecker@gmx.de / 01639745616</b>"
  const bennyText = "Wo soll ich da nur anfangen. Im Grunde hat alles mit einem Cuba Libra angefangen. Auf einer Feier von Tristan kam ich aufbauen helfen, das ist jetzt 10 Jahre her, da lag sie einfach faul in der Sonne. Als am Abend die Feier begann, meinte Yvonne zu mir, ich solle doch auf ihre Tochter aufpassen, ich sähe so nett aus.<br><br>Wie sich herausstelle, war dies nicht der Fall. Keine 15 min später hatte sie ihr erstes Getränk in der Hand. Wie der Abend endete wissen die meisten. Irgendwas muss ich aber in den kommenden Jahren richtig gemacht haben, da ich herzlich in die Familie Badenhoop aufgenommen wurde. Aber erst vor gut 5 Jahren wurde die Freundschaft wirklich ernst. Mit Isabell und Tobias verbrachte ich die meiste Zeit, wenn ich nicht arbeiten war. Um alle Storys zu erzählen, bräuchte es ein Buch.<br><br>Isabell hat mir ein großes Geschenk gemacht, indem sie mir das Vertrauen schenkt, ihr Trauzeuge zu sein. Ich versuche mein Bestes, um sie nicht zu enttäuschen. Schlussendlich ist sie und Toby mittlerweile eine Familie für mich.<br><br><b>bennianselm@gmx.de / 01735850567</b>"
</script>

<section class="lg:hidden bg-blue px-4 py-24 flex flex-col items-center">
  <h1 class="font-script text-7xl lg:text-9xl text-white text-center">Unsere<br>Trauzeugen</h1>
  <div class="h-16"></div>
  <div class="bg-tony bg-cover bg-top rounded-full w-80 h-80"></div>
  <div class="h-12"></div>
  <h2 class="font-serif text-4xl text-white text-center">TONY BÖCKER</h2>
  <h3 class="font-serif font-bold text-xl text-white text-center opacity-90">- Trauzeuge von Tobias -</h3>
  <div class="h-8"></div>
  <p class="max-w-[40rem] font-serif text-lg text-white text-left opacity-90">{@html tonyText}</p>

  <div class="my-12 w-full h-[1px] bg-white opacity-80"></div>

  <div class="bg-benny bg-cover bg-top rounded-full w-80 h-80"></div>
  <div class="h-12"></div>
  <h2 class="font-serif text-4xl text-white text-center">BENJAMIN ANSELM</h2>
  <h3 class="font-serif font-bold text-xl text-white text-center opacity-90">- Trauzeuge von Isabell -</h3>
  <div class="h-8"></div>
  <p class="max-w-[40rem] font-serif text-lg text-white text-left opacity-90">{@html bennyText}</p>
</section>

<section class="hidden lg:flex bg-blue px-12 py-48 flex-col items-center">
  <div class="max-w-[80rem] flex flex-col items-start">
    <h1 class="font-script text-7xl lg:text-9xl text-white text-left">Unsere<br>Trauzeugen</h1>

    <div class="h-24"></div>

    <div class="flex flex-row">
      <div class="flex flex-col items-left mr-12">
        <h2 class="font-serif text-6xl text-white text-left">TONY BÖCKER</h2>
        <h3 class="font-serif font-bold text-2xl text-white text-left opacity-90">- Trauzeuge von Tobias -</h3>
        <div class="h-12"></div>
        <p class="font-serif text-xl text-white text-left opacity-90">{@html tonyText}</p>
      </div>
      <div class="bg-tony bg-cover bg-top rounded-full flex-shrink-0 flex-grow-0 w-96 h-96"></div>
    </div>

    <div class="my-24 w-full h-[1px] bg-white opacity-80"></div>

    <div class="flex flex-row">
      <div class="bg-benny bg-cover bg-top rounded-full flex-shrink-0 flex-grow-0 w-96 h-96"></div>
      <div class="flex flex-col items-left ml-12">
        <h2 class="font-serif text-6xl text-white text-left">BENJAMIN ANSELM</h2>
        <h3 class="font-serif font-bold text-2xl text-white text-left opacity-90">- Trauzeuge von Isabell -</h3>
        <div class="h-12"></div>
        <p class="font-serif text-xl text-white text-left opacity-90">{@html bennyText}</p>
      </div>
    </div>

  </div>
</section>