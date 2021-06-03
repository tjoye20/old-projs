import React from 'react';


export const ApprovalCard = (props) => {
  return (
    <div class="ui card">
      <div class="content">
        <div class="description">
          {props.children}
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  )
}
