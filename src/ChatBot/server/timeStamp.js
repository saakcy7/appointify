
export const timeStamp= ()=>
      {
        const d= new Date();
        const hr = d.getHours();
        const min = d.getMinutes().toString().padStart(2,'0');

        return (hr +':'+min);
      }


