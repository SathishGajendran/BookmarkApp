define([],function(){
    return tem;
});
var tem='<div class="panel panel-default" style="height: 95%;" >  ' +
    '  <div class="panel-heading">' +
    '        <div class="row"> ' +
    '           <div class="col-md-6" style="vertical-align: middle;line-height: 36px;">          ' +
    '                 <label class="control-label">Directory </label> ' +
    '                 D:/Bookmarks/ <span id="bookmarkPath"></span>  ' +
    '          </div> ' +
    '           <div class="col-md-6">' +
//    '                <button type="button" style="margin-left: 10px;" class="btn btn-danger pull-right" id="btnRemoveBookmark">Remove Bookmark</button>'+
    '                <button type="button" style="margin-left: 10px;" class="btn btn-success pull-right" data-toggle="modal" data-target="#addBookmarkModal">Add Bookmark</button>' +
//    '                <button type="button"  style="margin-left: 10px;" class="btn btn-success pull-right" id="btnOpen">Open</button>   ' +
    '                <button type="button" style="margin-left: 10px;" class="btn btn-success pull-right" id="btnBack">Back</button>     ' +
    '                <button type="button" style="margin-left: 10px;" class="btn btn-success pull-right disabled" id="btnNewFolder">New Folder</button>     ' +
    '       </div>' +
    '        </div>' +
    '    </div>   ' +
    ' <div class="panel-body"style="height: 98%;"> ' +
    '   <div id="bookmarkData"><ul class="list-group" id="bookmarkList"></ul></div> ' +
    '   </div></div>'+
    ' <div id="addBookmarkModal" class="modal fade" role="dialog">' +
    '        <div class="modal-dialog">' +
    '           <div class="modal-content">' +
    '                <div class="modal-header">' +
    '                    <button type="button" class="close" data-dismiss="modal">&times;</button>' +
    '                    <h4 class="modal-title">Add Bookmark</h4>   ' +
    '               </div>  ' +
    '           <div class="modal-body" class="col-md-12"> ' +
    '               <form role="form" class="form-horizontal">  ' +
    '                         <div class="form-group">' +
    '                              <label class="control-label col-md-4">Title</label>' +
    '                               <div class="col-md-5"> ' +
    '                                        <input class="form-control" type="text" maxlength="32" pattern="[a-zA-Z0-9]*" id="txtBMTitle"/>' +
    '                               </div>'+
    '                           </div>'+
    '                         <div class="form-group">' +
    '                                <label class="control-label col-md-4">Url</label>' +
    '                               <div class="col-md-5"> ' +
    '                            <input class="form-control" type="text" maxlength="32" pattern="[a-zA-Z0-9]*" id="txtBMUrl"/>' +
    '                         </div>'+
    '                   </div>'+
    '                </form>       '+
    '             </div>  ' +
    '            <div class="modal-footer"> ' +
    '                   <button type="button" class="btn btn-danger" id="closeModal" data-dismiss="modal">Close</button>' +
    '                   <button type="button" class="btn btn-success" id="btnSaveBookmark">Save</button>' +
    '             </div> ' +
    '          </div>   ' +
    '     </div> ' +
    '   </div>'    ;