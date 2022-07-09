module InputTypes
  class User < Types::BaseInputObject
    graphql_name 'UserAttributes'

    argument :email, String, required: true
  end
end
