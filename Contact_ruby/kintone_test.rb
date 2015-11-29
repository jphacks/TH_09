#! /bin/ruby
require 'kintone'
api = Kintone::Api.new("altobuns.cybozu.com", "kanai.toui@tsunolab.net", "tomu1991")


app = 20  # アプリのURL末尾を確認
id = 18 # 取得したい対象のレコード
recorddata = api.record.get(app, id)

puts recorddata["record"]["更新日時"]["value"]
