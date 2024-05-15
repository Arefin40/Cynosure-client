import { useForm } from "react-hook-form";
import { Input, Radio, RadioGroup, Textarea } from "@components/Form";
import Modal from "@components/Modal";
import Star from "@icons/Star";

const ReviewFormModal = ({ onCancel, onSubmit }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onValid = ({ rating, title, comment }) => {
      onSubmit({
         rating: parseInt(rating),
         comment: { title, body: comment },
      });
      onCancel();
   };

   return (
      <Modal
         title="Write a review"
         description="Give a review about your experience"
         onCancel={onCancel}
         onSubmit={handleSubmit(onValid)}
      >
         <form className="grid gap-y-6">
            <div className="flex justify-center">
               <RadioGroup
                  className="flex gap-x-4 items-center flex-row-reverse text-gray-300"
                  {...register("rating")}
               >
                  {[5, 4, 3, 2, 1].map((rating) => (
                     <Radio key={rating} value={rating} className="flex items-center rating">
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
         </form>
      </Modal>
   );
};
export default ReviewFormModal;
