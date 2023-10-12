const getMessageReceivedEmail = (name: string, english: boolean) => `
<html>
  <head>
    <style>
     * {
        box-sizing: border-box;
      }
      body {
        display: flex;
        flex-direction: column;
        background-color: #eaeaea;
        font-family: 'Poppins', Verdana, monospace;
        margin: 0;
      }
      header {
        height: 300px;
        color: white;

        background-color: #9747ff;
        font-weight: 700;
        font-size: 40px;
        padding: 120px 0; 
      }
      header div {
        margin: 0 auto;
        height: 60px;
        width: fit-content;
      }

      .content {
        padding: 50px;
      }

      a {
        color: #9747ff !important;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <header> 
      <div>${
        english
          ? `Thank you for your message ${name}!`
          : `Gracias por contactar conmigo ${name}!`
      }
      </div>
    </header>
    <div class="content">
    ${
      english
        ? ` 
      I've received your message and I'll answer as soon as posible. <br />
      <br />
      If you still haven't fully seen my portfolio I invite you to take another look and explore what you might have missed! <br />
      <a href="pauibanez.me" target="_blank">My Portfolio</a> <br />
      <br />
      Thank you for geting in contact with me! <br />
      <br />
      King Regards,<br />`
        : `
      He recibido tu mensaje, contestaré lo antes posible<br />
      <br />
      Si todavía no has tenido la oportunidad de ver completamente mi portafolio, te invito a echar otro vistazo y explorar lo que podrías haberte perdido! <br />
      <a href="pauibanez.me" target="_blank">Mi Portfolio</a> <br />
      <br />
      Gracias por contactar conmigo! <br />
      <br />
      Atentamente,<br />`
    }
      Pau Ibáñez, <br />
    </div>
  </body>
</html>
`;

export default getMessageReceivedEmail;
