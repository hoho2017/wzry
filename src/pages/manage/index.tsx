import React, { FC } from 'react';
import styles from './index.less';
import { connect, ManageModelState, ConnectProps } from 'umi';


interface PageProps extends ConnectProps {
  manage: ManageModelState;
}

const Manage: FC<PageProps> = (props) => {
  console.log(props.manage);
  return (
    <div>
      <h1 className={styles.title}>Page hero</h1>
      <h2>This is {props.manage.name}</h2>
    </div>
  );
}
export default connect(({ manage }: { hero: ManageModelState }) => ({ manage }))(Manage);
