module InputTypes
  class User < Types::BaseInputObject
    argument :email, String, required: true
  end
end
