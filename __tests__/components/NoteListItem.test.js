import React from 'react';
import NoteListItem from '../../src/components/NoteListItem';
import NoteContext from '../../src/data/NoteContext';
import { shallow } from 'enzyme';

describe('NoteListItem ', () => {
  
  it ('has h3 element', () => {
    const props = {index: 1,key: 0,note: { title: 'Title', summary: 'Summary'}}
    const wrapper = shallow(<NoteListItem {...props}/>);
    expect(wrapper.exists('h3')).toBe(true);
  });

  it ('has p element', () => {
    const props = {index: 1,key: 0,note: { title: 'Title', summary: 'Summary'}}
    const wrapper = shallow(<NoteListItem {...props}/>);
    expect(wrapper.exists('p')).toBe(true);
  });

  it ('the app should have list item element', () => {
    const props = { index: 1, key: 0, note: { title: 'Title', summary: 'Summary'}}
    const wrapper = shallow(<NoteListItem {...props}/>);
    expect(wrapper.exists('li')).toBe(true);
  });

  it ('p element contains correct summary', () => {
    const props = {index: 1,key: 0,note: { title: 'Title', summary: 'Summary...'}}
    
    // enzyme wrapper.find does work with react context API
    const outer = shallow(<NoteListItem {...props}/>);
    const NoteListItemComponent = outer.props().children;
    const wrapper = shallow(<NoteListItemComponent />);
    expect(wrapper.find('p').at(0).text()).toContain('Summary...');
  });

  it ('p element contains correct title', () => {
    const props = {index: 1,key: 0,note: { title: 'Title', summary: 'Summary...'}}
    
    // enzyme wrapper.find does work with react context API
    const outer = shallow(<NoteListItem {...props}/>);
    const Children = outer.props().children;
    const wrapper = shallow(<Children />);
    expect(wrapper.find('h3').at(0).text()).toContain('Title');
  });

});
