import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from "react-redux";
import { useRouter } from 'react-router5';
import { Card, Div } from "@vkontakte/vkui";

import './ColumnCard.css';
import { pages } from "../../../../router";
// import { deleteCard } from "../../../cards/actions";

const ColumnCard = ({ children, id }) => {
  // const dispatch = useDispatch();
  // const deleteItem = () => dispatch(deleteCard(id));
  const router = useRouter();
  const goToCardPage = useCallback(() => router.navigate(pages.CARD, { cardId: id }), [router, id]);

  return (
    <Card size="l" mode="outline" onClick={goToCardPage}>
      <Div className="ColumnCard__wrapper">{children}</Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(ColumnCard);
