const getMessageReceivedEmail = (name: string, english: boolean) => `
<html>
  <head>
    <style>
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
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 40px;
      }

      main {
        padding: 50px;
      }

      a {
        color: #9747ff;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <header>${
      english
        ? `Thank you for your message ${name}!`
        : `Gracias por contactar conmigo ${name}!`
    }.</header>
    <main>
    ${
      english
        ? ` 
      I've received your message and I'll answer as soon as posible. <br />
      <br />
      If you still havn't fully seen my portfolio I invite you to take another look and explore what you might have missed! <br />
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
    </main>
  </body>
</html>
`;

export default getMessageReceivedEmail;
