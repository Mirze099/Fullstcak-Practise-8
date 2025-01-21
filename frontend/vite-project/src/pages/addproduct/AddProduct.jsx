import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";
import axios from "axios";

export default function AddProduct() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:3000/product/");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleAdd(values) {
    axios
      .post(`http://localhost:3000/product`, values)
      .then(() => navigate(-1))
      .catch((err) => console.error(err));
  }

  function handleDelete(id) {
    let filteredArr = data.filter((item) => item._id !== id);
    setData(filteredArr);
    axios
      .delete(`http://localhost:3000/product/${id}`)
      .then((res) => {
        getData();
      })
      .catch((err) => console.error(err));
  }
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
    desc: Yup.string()
      .min(10, "Too Short!")
      .max(999, "Too Long!")
      .required("Required"),
    img: Yup.string()
      .min(3, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
  });
  return (
    <div>
      <div className="mains container">
        <table id="customers">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Desciription</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((data) => (
                <tr>
                  <td>
                    <img src={data.img} alt="" className="img" />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.desc}</td>
                  <td>
                    <Button
                      color="danger"
                      variant="solid"
                      onClick={() => handleDelete(data._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <h1>Add Product</h1>
        <Formik
          initialValues={{
            name: "",
            desc: "",
            img: "",
          }}
          validationSchema={SignupSchema}
          enableReinitialize
          onSubmit={(values) => handleAdd(values)}
        >
          {({ errors, touched }) => (
            <Form className="add-form">
              <Field name="name" className="field" placeholder="name" />
              {errors.name && touched.name ? (
                <Alert severity="error" className="alertt">
                  {errors.name}
                </Alert>
              ) : null}

              <Field name="desc" className="field" placeholder="desc" />
              {errors.desc && touched.desc ? (
                <Alert severity="error" className="alertt">
                  {errors.desc}
                </Alert>
              ) : null}

              <Field name="img" className="field" placeholder="Image" />
              {errors.img && touched.img ? (
                <Alert severity="error" className="alertt">
                  {errors.img}
                </Alert>
              ) : null}

              <Button
                type="primary"
                htmlType="submit"
                onClick={() => navigate("/")}
              >
                ADD PRODUCT
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
