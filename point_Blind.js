(function () {
    "use strict";
    kintone.events.on(['app.record.edit.change.カードの種類', 'app.record.create.change.カードの種類'], function (event) {
        // 「合計」フィールドの入力を制限
        var record = event['record'];

        if (record['カードの種類'].value != "ポイントカード" ){
          record['ポイント残高'].disabled = true;


        }else {
          record['ポイント残高'].disabled =false;

        }

        return event;
    });
})();

(function () {
    "use strict";
    kintone.events.on(['app.record.edit.change.カードの種類', 'app.record.create.change.カードの種類'], function (event) {

        var record = event['record'];

        if (record['カードの種類'].value == "キャッシュカード" ){
            record['名義'].disabled =false;
    　  }else if(record['カードの種類'].value == "クレジットカード" ){
      　         record['名義'].disabled =false;
                  }else if (record['カードの種類'].value == "診察券" ) {
                            record['名義'].disabled =false;
                          }else {
                                  record['名義'].disabled = true;
                                }
        return event;
    });
    /*
    kintone.events.on('app.record.detail.show',function (event){
        if (record['名義'].value == null){
          kintone.app.record.setFieldShown('名義',false);
        }else {
          kintone.app.record.setFieldShown('名義',true);
        }
        if (record['ポイント残高'].value == null){
          kintone.app.record.setFieldShown('ポイント残高',false);
        }else {
          kintone.app.record.setFieldShown('ポイント残高',true);
        }
        return event;
     */
})();
