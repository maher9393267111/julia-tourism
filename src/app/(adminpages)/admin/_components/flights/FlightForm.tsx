"use client";
import { Button, Form, Modal, message, Upload, Input } from "antd";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { SetLoading } from "@/redux/LoadersSlice";
import { uploadImages, deleteImages } from "@/helpers/imageUploadAndDelete";
import axios from "axios";
import { getCatchErrorMessage } from "@/helpers/ErrorMessgaes";
import ModelTitle from "@/components/myComponents/ModelTitle";
import { ProductType } from "@/interfaces";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const locations = ["istanbul", "bursa", "trabzon", "izmir", "izmit"];

const services= ["hotel", "visa", "car", "transport", "tour" ,"package" ,"flight"];

function FlightForm({
  showCategoryForm,
  setShowCategoryForm,
  selectedCategory,
  setSelectedCategory,
  reloadCategories,
}: FlightFormProps) {
  const dispatch = useDispatch();

  const [files, setFiles] = React.useState<any>([]);
  const [images = [], setImages] = React.useState<any>(
    selectedCategory?.images || []
  );

  const [value, setValue] = React.useState<any>("");

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const onFinish = async (values: ProductType) => {
    try {
      dispatch(SetLoading(true));
      let response;
      if (selectedCategory) {
        console.log(
          "selected",
          selectedCategory?.images,
          "values",
          values.images
        );
        // delete images
        const imagesToDelete = selectedCategory.images.filter(
          (image: string) => !values.images.includes(image)
        );
        await deleteImages(imagesToDelete);
        const newImagesUploaded = await uploadImages(files);
        values.images = [...values.images, ...newImagesUploaded];

        response = await axios.put(
          `/api/admin/flights/${selectedCategory._id}`,
          values
        );
      } else {
        values.images = await uploadImages(files);

        response = await axios.post("/api/admin/flights", values);
      }
      message.success("Flight Added Successfully");
      setShowCategoryForm(false);
      reloadCategories();
      setSelectedCategory(null);
    } catch (error: any) {
      message.error(getCatchErrorMessage(error));
    } finally {
      dispatch(SetLoading(false));
    }
  };

  console.log("S?????", selectedCategory);

  const modelTitle = selectedCategory ? "Edit Banner" : "Add Banner";
  return (
    <Modal
      title={<ModelTitle title={modelTitle} />}
      open={showCategoryForm}
      onCancel={() => {
        setShowCategoryForm(false);
        setSelectedCategory(null);
      }}
      footer={null}
    >
      <Form
        layout="vertical"
        onFinish={(values) =>
          onFinish({
            ...values,
            images,
          })
        }
        initialValues={selectedCategory}
        className="flex flex-col gap-5"
      >
        <Form.Item
          label="title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input title",
            },
          ]}
        >
          {/* <input type="text" /> */}
          <Input className="    input_style  " type="text" />
        </Form.Item>

   
   
        <Form.Item
          label="Service"
          name="service"
          rules={[
            {
              required: true,
              message: "Please input service name",
            },
          ]}
        >
      
      <select className="input_style w-full py-2" value={""}>
            <option value="">Select Service</option>
            {services.map((location: any, index: any) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>




        </Form.Item>




        <div className="col-span-3">
          <Upload
            accept="image/*"
             
            beforeUpload={(file) => {
              setFiles((prev: any) => [...prev, file]);
              return false;
            }}
            listType="picture-card"
            maxCount={1}
          >
            Upload Images
          </Upload>
        </div>

        <div className="flex gap-5">
          {images?.map((image: any, index: number) => (
            <div
              key={index}
              className="p-5 border-solid border border-gray-300 rounded-md overflow-hidden flex flex-col items-center justify-center gap-2"
            >
              <Image
                className="w-20 h-20 object-cover"
                src={image}
                alt={image}
                width={80}
                height={80}
              />

              <span
                className="underline cursor-pointer text-gray-600"
                onClick={() => {
                  setImages((prev: any) => {
                    const temp = [...prev];
                    temp.splice(index, 1);
                    return temp;
                  });
                }}
              >
                Remove
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-5">
          <Button onClick={() => setShowCategoryForm(false)}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default FlightForm;

export interface FlightFormProps {
  showCategoryForm: boolean;
  setShowCategoryForm: any;
  selectedCategory: any;
  setSelectedCategory: any;
  reloadCategories: any;
}
