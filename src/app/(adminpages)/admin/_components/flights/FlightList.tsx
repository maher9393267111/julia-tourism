import { getCatchErrorMessage } from "@/helpers/ErrorMessgaes";
import { SetLoading } from "@/redux/LoadersSlice";
import { Button, Table, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import FlightForm from "./FlightForm";
import DeleteButton from "@/components/myComponents/DeleteButton";
import EditButton from "@/components/myComponents/EditButton";
import { CatchBlockErrorType, CategoryType } from "@/interfaces";
import parse from "html-react-parser";
import moment from "moment";

function FlightList() {
  const [showCategoryForm, setShowCategoryForm] = React.useState(false);
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryType>();
  const [files, setFiles] = React.useState<any>([]);
  const dispatch = useDispatch();
  const [categories, setCategories] = React.useState<CategoryType[]>([]);
  const getCategories = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.get("/api/admin/flights");
      setCategories(response.data.data);
    } catch (error: any) {
      message.error(getCatchErrorMessage(error));
    } finally {
      dispatch(SetLoading(false));
    }
  };
  React.useEffect(() => {
    getCategories();
  }, []);

  const onDelete = async (id: string) => {
    try {
      dispatch(SetLoading(true));
      await axios.delete(`/api/admin/flights/${id}`);
      message.success("Flight Deleted Successfully");
      getCategories();
    } catch (error: any) {
      message.error(getCatchErrorMessage(error));
    } finally {
      dispatch(SetLoading(false));
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
    },

    {
      title: "Service",
      dataIndex: "service",
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (createdAt: string) => {
        return <p> {moment(createdAt).format("DD/MM/YYYY")}</p>;
      },


    },

    //     {
    //       title: "Description",
    //       dataIndex: "description",
    //       render: (description: string) => {
    //         return (<div>

    // {parse(description)}

    //         </div>)

    //       },
    //     },

    {
      title: "Action",
      dataIndex: "action",
      render: (text: string, record: CategoryType) => {
        return (
          <div className="flex gap-2 text-white">
            <DeleteButton title="Delete" onClick={() => onDelete(record._id)} />
            <EditButton
              title="Edit"
              onClick={() => {
                setSelectedCategory(record);
                setShowCategoryForm(true);
              }}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="flex justify-end">
        <Button
          type="primary"
          onClick={() => {
            setShowCategoryForm(true);
            setSelectedCategory(undefined);
          }}
        >
          Add Banner
        </Button>
      </div>

      <div className="mt-5">
        <Table columns={columns} dataSource={categories} />
      </div>

      {showCategoryForm && (
        <FlightForm
          showCategoryForm={showCategoryForm}
          setShowCategoryForm={setShowCategoryForm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          reloadCategories={getCategories}
        />
      )}
    </div>
  );
}

export default FlightList;
