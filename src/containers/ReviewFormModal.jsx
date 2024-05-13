import { useForm } from "react-hook-form";
import { Input, Radio, RadioGroup, Textarea } from "@components/Form";
import Modal from "@components/Modal";
import Button from "@components/Button";
import Star from "@icons/Star";

const ReviewFormModal = ({ isModalOpen, onCancel, onSubmit }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onValid = (data) => {
      onSubmit(data);
      onCancel();
   };

   if (!isModalOpen) return;

   return (
      <Modal
         isOpen={isModalOpen}
         className="p-5 sm:p-6 w-full max-w-lg grid gap-y-6 rounded-xl shadow-xl z-50 border flex-shrink-0  bg-white animate-scale-in"
      >
         <div className="space-y-1 text-center">
            <h1 className="text-xl text-gray-800 font-semibold">
               Write a review
            </h1>
            <p>Give a review about your experience</p>
         </div>

         <form className="grid gap-y-6" onSubmit={handleSubmit(onValid)}>
            <div className="flex justify-center">
               <RadioGroup
                  className="flex gap-x-4 items-center flex-row-reverse text-gray-300"
                  {...register("rating")}
               >
                  {[5, 4, 3, 2, 1].map((rating) => (
                     <Radio
                        key={rating}
                        value={rating}
                        className="flex items-center rating"
                     >
                        <Star className="w-6 h-6 sm:w-8 lg:h-8" />
                     </Radio>
                  ))}
               </RadioGroup>
            </div>

            <div className="grid gap-y-4">
               <Input
                  label="Headline"
                  placeholder="Review headline"
                  errors={errors}
                  {...register("title", { required: true })}
               />
               <Textarea
                  label="Comment"
                  placeholder="Write your comment"
                  errors={errors}
                  {...register("comment", { required: true })}
               />
            </div>

            <div className="mx-auto w-full grid grid-cols-2 gap-x-2 max-w-80">
               <Button type="submit" color="primary">
                  Submit
               </Button>
               <Button variant="outlined" onClick={onCancel}>
                  Cancel
               </Button>
            </div>
         </form>
      </Modal>
   );
};
export default ReviewFormModal;
