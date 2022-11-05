import React, { useContext } from "react";
import { CreateProduct } from "../component/CreateProduct";
import ErrorMessage from "../component/ErrorMessage";
import Loader from "../component/Loader";
import Modal from "../component/Modal";
import { Product } from "../component/Product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

export default function ProductPages() {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new modal" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="absolute bottom-5 right-5
      rounded-full bg-red-700
      text-white text-2xl
      px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
}
