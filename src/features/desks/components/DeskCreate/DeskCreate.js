import React, { useCallback, memo } from 'react';
import { useDispatch } from "react-redux";

import CreateForm from "../../../../components/CreateForm/CreateForm";
import { createDesk } from "../../actions";

const DeskCreate = () => {
  const dispatch = useDispatch();
  const createItem = useCallback((name) => dispatch(createDesk(name)), [dispatch]);

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default memo(DeskCreate);
