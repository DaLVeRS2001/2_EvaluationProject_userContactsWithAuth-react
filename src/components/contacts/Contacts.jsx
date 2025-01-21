import React from 'react';
import s from './Contacts.module.scss';
import Header from '../header/Header';
import Table from './#common/table/Table';
import MobileTable from './#common/table/MobileTable';

export const Contacts = (props) => {
  return (
    <div className={s.contacts}>
      <Header
        searchValue={props.searchValue}
        addSearchValue={props.addSearchValue}
        signOut={props.signOut}
      />
      <main>
        {props.vpWidth > 650 ? (
          <Table
            filteredContacts={props.filteredContacts}
            removeContact={props.removeContact}
            openModal={props.openModal}
          />
        ) : (
          <MobileTable
            filteredContacts={props.filteredContacts}
            removeContact={props.removeContact}
            openModal={props.openModal}
          />
        )}
        <div
          onClick={() => props.openModal(true, 'post')}
          className={s.contacts__contactModalToggle}
        >
          <span>+</span>
        </div>
      </main>
    </div>
  );
};
