import React, { Component } from 'react'


export class Newsitem extends Component {


  render() {
    let {title,desc,ImageUrl,NewsUrl,author,date,source}=this.props
    return (
      <div >
        <div className="card" >
        <div style={{
           display:'flex',
           justifyContent:'flex-end',
           position:'absolute',
           right:'0'
        }}>
        <span className=" badge rounded-pill bg-danger" >{source}</span></div>
            <img src={ImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Uknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={NewsUrl}className="btn btn-dark">Read More</a>
            </div>
</div>
      </div>
    )
  }
}

export default Newsitem
