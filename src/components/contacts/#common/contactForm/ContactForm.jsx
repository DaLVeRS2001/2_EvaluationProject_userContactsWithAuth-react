import s from './ContactForm.module.scss';
import { useForm } from 'react-hook-form';
import { CustomField } from '../../../../utils/formUtils/CustomField';
import React from 'react';

let Input = CustomField('input');

const ContactForm = (props) => {
  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const onSubmit = (data) => {
    const { firstName, lastName, ...other } = data;

    const correctData = {
      ...other,
      name: firstName + ' ' + lastName,
      id:
        props.modalType === 'post'
          ? !props.contacts.length
            ? 1
            : props.contacts[0].id + 1
          : props.contactId,
    };

    props.handleContact(correctData);
    (() => reset())();
    props.openModal(false);
  };
  const setDefaultValue = (nameField) => {
    if (props.modalType === 'put') {
      const defaultValue = props.contacts.find(
          (item) => item.id === props.contactId
        ),
        firstName =
          nameField === 'firstName' && defaultValue.name.split(' ')[0],
        lastName = nameField === 'lastName' && defaultValue.name.split(' ')[1];

      if (firstName) return firstName;
      if (lastName) return lastName;
      return defaultValue[nameField];
    }
  };

  return (
    <form className={s.modalForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.modalForm__part}>
        <Input
          name={'firstName'}
          isLabel={false}
          useForm={{ register, errors }}
          validate={{
            required: 'Field is required',
            maxLength: { value: 15, message: 'Max length is 15' },
            minLength: { value: 3, message: 'Min length is 3' },
            pattern: {
              value: /^[a-zA-Zа-яА-Я]+[a-zA-Zа-яА-Я]$/,
              message: 'Only letters',
            },
          }}
          fieldData={{
            placeholder: 'Name',
            type: 'text',
            id: 'firstName',
            defaultValue: setDefaultValue('firstName'),
          }}
        />

        <Input
          name={'lastName'}
          isLabel={false}
          useForm={{ register, errors }}
          validate={{
            required: 'Field is required',
            maxLength: { value: 15, message: 'Max length is 15' },
            minLength: { value: 3, message: 'Min length is 3' },
            pattern: {
              value: /^[a-zA-Zа-яА-Я]+[a-zA-Zа-яА-Я]$/,
              message: 'Only letters',
            },
          }}
          fieldData={{
            placeholder: 'Surname',
            type: 'text',
            id: 'lastName',
            defaultValue: setDefaultValue('lastName'),
          }}
        />
      </div>

      <div className={s.modalForm__part}>
        <Input
          name={'company'}
          isLabel={false}
          useForm={{ register, errors }}
          validate={{
            required: 'Field is required',
            maxLength: { value: 20, message: 'Max length is 20' },
          }}
          fieldData={{
            placeholder: 'Company',
            type: 'text',
            id: 'company',
            defaultValue: setDefaultValue('company'),
          }}
        />

        <Input
          name={'job'}
          isLabel={false}
          useForm={{ register, errors }}
          validate={{
            required: 'Field is required',
            maxLength: { value: 20, message: 'Max length is 20' },
          }}
          fieldData={{
            placeholder: 'Job',
            type: 'text',
            id: 'job',
            defaultValue: setDefaultValue('job'),
          }}
        />
      </div>

      <div className={s.modalForm__part}>
        <Input
          name={'phone'}
          isLabel={false}
          useForm={{ register, errors }}
          validate={{
            required: 'Field is required',
            pattern: {
              value: /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
              message: 'Number is not correct',
            },
          }}
          fieldData={{
            placeholder: '+7(910)-221-22-22',
            type: 'text',
            id: 'phone',
            defaultValue: setDefaultValue('phone'),
          }}
        />

        <Input
          name={'email'}
          isLabel={false}
          useForm={{ register, errors }}
          validate={{ required: 'Field is required' }}
          fieldData={{
            placeholder: 'Email',
            type: 'email',
            id: 'email',
            defaultValue: setDefaultValue('email'),
          }}
        />
      </div>

      <button>{props.modalType === 'post' ? 'Create' : 'Update'}</button>
    </form>
  );
};

export default ContactForm;
