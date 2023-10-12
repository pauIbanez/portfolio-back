import MessageData from "../../../../types/MessageData";

const getAwaitingAnswerEmail = (message: MessageData, english: boolean) => `
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
      <div>
        New Mail
      </div>
    </header>
    <div class="content">
      Language: ${english ? "English" : "Spanish"}. <br />
      Received at: ${new Date(Date.now()).toString()}. <br />
      ${message.typeVariable && `Variable: ${message.typeVariable}`}<br />
      <br />
      Complete name: ${message.firstName} ${message.lastName}.<br />
      Message Type: ${message.messageType}. <br />
      From: ${message.email}.<br />
      Subject: ${message.subject}.<br />
      <br />
      Message: \n
      ${message.message}.
    </div>
  </body>
</html>

`;

export default getAwaitingAnswerEmail;
