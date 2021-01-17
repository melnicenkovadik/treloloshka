import React, { useCallback, memo } from 'react';
import { Div } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";
import { useRoute } from "react-router5";

import '../Column/Column.css'
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions";

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const { route: { params: { deskId } } } = useRoute();
  const createItem = useCallback((name) => dispatch(createColumn(name, deskId)), [deskId, dispatch]);

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default memo(ColumnCreate);
