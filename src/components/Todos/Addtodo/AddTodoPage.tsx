import { useState, type ChangeEvent } from "react";
import FormField from "../../Formvalidation/FormField";
import { useTranslation } from "react-i18next";
import TextAreaField from "../../Formvalidation/TextAreaField";

function AddTodoPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>): void;
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void;
  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) {
    console.log(event);

    setFormData((prevData) => {
      return prevData;
    });
  }

  return (
    <div className="flex w-full mt-16 p-10">
      <form className="flex flex-col gap-10 p-7 border-2 border-black rounded-lg m-auto w-full max-w-2xl">
        <h2 className="text-2xl font-[Tagesschrift] text-center">Add ToDo</h2>
        <div className="flex flex-col gap-4">
          <FormField
            label={t("Title")}
            placeholder="Enter Todo title..."
            name="title"
            id="addtitle"
            value={formData.title}
            onChange={handleChange}
          />
          <TextAreaField
            label={t("Description")}
            placeholder="Enter Todo description..."
            name="description"
            id="adddescription"
            rows={5}
            value={formData.description}
            onChange={handleChange}
          />
          {/* <FormField label={t('Extreme')} type="radio" placeholder="Enter Todo title..." name="title" id="addtitle" value={formData.title} onChange={handleChange}/>
                <FormField label={t('High')} type="radio" placeholder="Enter Todo title..." name="title" id="addtitle" value={formData.title} onChange={handleChange}/>
                <FormField label={t('Low')} type="radio" placeholder="Enter Todo title..." name="title" id="addtitle" value={formData.title} onChange={handleChange}/> */}
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-md m-auto">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoPage;
