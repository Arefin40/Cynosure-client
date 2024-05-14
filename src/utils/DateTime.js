export const formattedDate = (dataString) => {
   if (!dataString) return null;

   const date = new Date(dataString);
   const yyyy = date.getFullYear();
   let mm = date.getMonth() + 1; // Months start at 0!
   let dd = date.getDate();

   if (dd < 10) dd = "0" + dd;
   if (mm < 10) mm = "0" + mm;

   return dd + "/" + mm + "/" + yyyy;
};

export const dateDifferenceInDays = (date1, date2) => {
   if (!date1 || !date2) return null;

   let _date1 = new Date(date1);
   let _date2 = new Date(date2);

   let differenceInTme = Math.abs(_date2.getTime() - _date1.getTime());
   let differenceInDays = Math.round(differenceInTme / (1000 * 3600 * 24));

   return differenceInDays;
};
