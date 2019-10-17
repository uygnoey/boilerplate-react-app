import React, { Component } from 'react';

import _ from 'lodash';

import { getDiscounts, getDiscountsId, postDiscounts, putDiscountsId } from './api';

class Demo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      form: {
        postBody: {},
        putBody: {}
      },
      data: {}
    };
  }

  getDiscountsApi () {
    getDiscounts().then((res) => {
      this.setState({
        data: res.data
      });
    }).catch(e => {
      alert(e);
    });
  }

  getDiscountsIdApi () {
    const form = this.state.form;
    getDiscountsId(form.get_id).then((res) => {
      this.setState({
        data: res.data
      });
    }).catch(e => {
      alert(e);
    });
  }

  postDiscountsApi () {
    const form = this.state.form;
    postDiscounts(form.post_id, form.postBody).then((res) => {
      this.setState({
        data: res.data
      });
    }).catch(e => {
      alert(e);
    });
  }

  putDiscountsApi () {
    const form = this.state.form;
    putDiscountsId(form.put_id, form.putBody).then((res) => {
      this.setState({
        data: res.data
      });
    }).catch(e => {
      alert(e);
    });
  }

  onChangeInput (e) {
    const form = this.state.form;

    const { name, value } = e.target;

    form[name] = value;

    this.setState({
      form
    });
  }

  onChangeInputPost (e) {
    const form = this.state.form;

    let { name, type, value, checked } = e.target;

    if (type === 'checkbox') {
      value = checked;
    }

    if (_.includes(name, 'post_')) {
      name = name.substring('post_'.length);
    }

    console.log(name, value, type);

    form.postBody[name] = value;

    this.setState({
      form
    });
  }

  onChangeInputPut (e) {
    const form = this.state.form;

    let { name, type, value, checked } = e.target;

    if (type === 'checkbox') {
      value = checked;
    }

    if (_.includes(name, 'put_')) {
      name = name.substring('put_'.length);
    }

    console.log(name, value, type);

    form.putBody[name] = value;

    this.setState({
      form
    });
  }

  render () {
    return (
      <div>
        <p>Get Discounts</p>
        <button onClick={this.getDiscountsApi.bind(this)}>Get Discounts DATA</button>
        <p>Get Discounts Id</p>
        <span>ID : </span><input type="text" name="get_id" onChange={this.onChangeInput.bind(this)}/><br/>
        <button onClick={this.getDiscountsIdApi.bind(this)}>Get Discounts Id DATA</button>
        <p>Post Discounts</p>
        <span>ID : </span><input type="text" name="post_id" onChange={this.onChangeInput.bind(this)}/><br/>
        <span>action type : </span><input type="text" name="post_actionType" onChange={this.onChangeInputPost.bind(this)}/><br/>
        <span>DESC : </span><input type="text" name="post_desc" onChange={this.onChangeInputPost.bind(this)}/><br/>
        <span>Discount Amount : </span><input type="number" name="post_discountAmount" onChange={this.onChangeInputPost.bind(this)}/><br/>
        <span>Enable : </span><input type="checkbox" name="post_enable" onChange={this.onChangeInputPost.bind(this)}/><br/>
        <span>Name : </span><input type="text" name="post_name" onChange={this.onChangeInputPost.bind(this)}/><br/>
        <span>Start At : </span><input type="text" name="post_startAt" onChange={this.onChangeInputPost.bind(this)}/><br/>
        <button onClick={this.postDiscountsApi.bind(this)}>Post Discounts DATA</button>
        <p>Put Discounts</p>
        <span>ID : </span><input type="text" name="put_id" onChange={this.onChangeInput.bind(this)}/><br/>
        <span>action type : </span><input type="text" name="put_actionType" onChange={this.onChangeInputPut.bind(this)}/><br/>
        <span>DESC : </span><input type="text" name="put_desc" onChange={this.onChangeInputPut.bind(this)}/><br/>
        <span>Discount Amount : </span><input type="number" name="put_discountAmount" onChange={this.onChangeInputPut.bind(this)}/><br/>
        <span>Enable : </span><input type="checkbox" name="put_enable" onChange={this.onChangeInputPut.bind(this)}/><br/>
        <span>Name : </span><input type="text" name="put_name" onChange={this.onChangeInputPut.bind(this)}/><br/>
        <span>Start At : </span><input type="text" name="put_startAt" onChange={this.onChangeInputPut.bind(this)}/><br/>
        <button onClick={this.putDiscountsApi.bind(this)}>Put Discounts DATA</button>

        <p>Result</p>
        <textarea disabled={true} value={JSON.stringify(this.state.data, null, 2)} cols={200} rows={30} />
      </div>
    );
  }
}

export default Demo;
