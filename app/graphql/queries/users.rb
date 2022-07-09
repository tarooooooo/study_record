module Queries
  class Users < Queries::BaseQuery

    type [ObjectTypes::User], null: false

    def resolve(**args)
      ::User.all.order(:id)
    end
  end
end
