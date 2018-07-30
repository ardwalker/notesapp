import React from 'react';
import NoteDetailItem from '../../src/components/NoteDetailItem';
import { shallow } from 'enzyme';

describe('NoteDetailItem ', () => {
  
  it ('has h3 element', () => {
    const props = {index: 1,key: 0,note: { title: 'Title', summary: 'Summary'}}
    const wrapper = shallow(<NoteDetailItem {...props}/>);
    expect(wrapper.exists('h3')).toBe(true);
  });

  it ('has p element', () => {
    const props = {index: 1,key: 0,note: { title: 'Title', summary: 'Summary'}}
    const wrapper = shallow(<NoteDetailItem {...props}/>);
    expect(wrapper.exists('p')).toBe(true);
  });
  
  it ('the app should have list item element', () => {
    const props = { index: 1, key: 0, note: { title: 'Title', summary: 'Summary'}}
    const wrapper = shallow(<NoteDetailItem {...props}/>);
    expect(wrapper.exists('li')).toBe(true);
  });
  
  it ('p element contains correct summary', () => {
    const props = {index: 1,key: 0,note: { title: 'Title', summary: 'Summary...'}}
  
    const wrapper = shallow(<NoteDetailItem {...props}/>);
    expect(wrapper.find('p').at(0).text()).toContain('Summary');
  });
  
  it ('p element contains correct title', () => {
    const note = { title: 'Title2', summary: 'Summary...'};
    const wrapper = shallow(<NoteDetailItem/>);
    wrapper.setState({note: note});
    expect(wrapper.find('h3').at(0).text()).toContain('Title2');
  });

});
