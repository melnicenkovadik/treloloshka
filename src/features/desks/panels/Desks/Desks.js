import React, { Fragment, memo } from 'react';
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";

import DeskList from "../../components/DeskList/DeskList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";

const Desks = () => {
  return (
    <Fragment>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>

      <Div><DeskCreate /></Div>

      <DeskList />
    </Fragment>
  );
};

export default memo(Desks);
