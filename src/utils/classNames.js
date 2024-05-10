export default (classNames) => {
   const classes = [];

   for (const [key, shouldPick] of Object.entries(classNames)) {
      if (shouldPick) {
         classes.push(...key.split(" "));
      }
   }

   return classes.join(" ");
};
