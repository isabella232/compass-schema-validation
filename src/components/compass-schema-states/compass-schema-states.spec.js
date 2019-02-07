import React from 'react';
import { mount } from 'enzyme';
import CompassSchemaStates from 'components/compass-schema-states';
import styles from './compass-schema-states.less';

describe('CompassSchemaStates [Component]', () => {
  let component;
  const changeZeroStateSpy = sinon.spy();
  const setZeroStateChangedSpy = sinon.spy();
  const openLinkSpy = sinon.spy();
  const isZeroState = false;
  const isEditable = false;
  const serverVersion = '3.1.0';
  const setValidatorChangedSpy = sinon.spy();
  const setValidationActionChangedSpy = sinon.spy();
  const setValidationLevelChangedSpy = sinon.spy();
  const setCancelValidationSpy = sinon.spy();
  const saveValidationSpy = sinon.spy();
  const fetchSampleDocumentsSpy = sinon.spy();
  const fields = [];
  const validation = {
    validator: '',
    validationAction: 'warn',
    validationLevel: 'moderate',
    isChanged: false,
    syntaxError: null,
    error: null
  };
  const sampleDocuments = {};

  beforeEach(() => {
    component = mount(
      <CompassSchemaStates
        validatorChanged={setValidatorChangedSpy}
        validationActionChanged={setValidationActionChangedSpy}
        validationLevelChanged={setValidationLevelChangedSpy}
        cancelValidation={setCancelValidationSpy}
        saveValidation={saveValidationSpy}
        fetchSampleDocuments={fetchSampleDocumentsSpy}
        serverVersion={serverVersion}
        fields={fields}
        validation={validation}
        changeZeroState={changeZeroStateSpy}
        zeroStateChanged={setZeroStateChangedSpy}
        isZeroState={isZeroState}
        isEditable={isEditable}
        serverVersion={serverVersion}
        sampleDocuments={sampleDocuments}
        openLink={openLinkSpy} />
    );
  });

  afterEach(() => {
    component = null;
  });

  it('renders the wrapper div', () => {
    expect(component.find(`.${styles['compass-schema-states']}`)).to.be.present();
  });

  it('renders the version banner', () => {
    expect(component.find(`.${styles['upgrade-link']}`)).to.be.present();
  });
});
