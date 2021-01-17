import React, { Fragment, useEffect, memo } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useSelector, useDispatch } from 'react-redux';

import { pages } from "../../../router";
import { changeRoute } from "../../actions";
import { getActivePanel, getPopout } from "../../selectors";

import Desks from "../../../features/desks/panels/Desks/Desks";
import Columns from "../../../features/columns/panels/Columns/Columns";
import Card from '../../../features/card/panels/Card/Card';

const App = () => {
  const dispatch = useDispatch();
  const activePanel = useSelector(getActivePanel);
  const popout = useSelector(getPopout);
  const { router, route } = useRoute();

  useEffect(() => {
    router.subscribe((...args) => dispatch(changeRoute(...args)));

    dispatch(changeRoute({ route }));
  }, [dispatch, route, router]);

  if (!activePanel) {
    return null;
  }

  return (
    <Fragment>
      <View activePanel={activePanel} header={false} popout={popout}>
        <Panel id={pages.DESKS} separator={false}>
          <Desks />
        </Panel>

        <Panel id={pages.COLUMNS} separator={false} className="Columns">
          <Columns />
        </Panel>

        <Panel id={pages.CARD} separator={false}>
          <Card />
        </Panel>
      </View>
    </Fragment>
	);
};

export default memo(App);

