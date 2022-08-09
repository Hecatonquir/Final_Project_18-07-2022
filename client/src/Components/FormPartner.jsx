import { React, useState } from "react";
import { sendPartnerForm } from "../Redux/Actions/sendPartnerForm";
import Nav from "./Nav";
import swal from "sweetalert";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
import userRegister from "../Redux/Actions/postRegister";

function FormPartner() {
  function validate(input) {
    let {
      Name,
      LastName,
      CompanyName,
      FiscalAddress,
      ID,
      NumberPhone,
      CUIT,
      CBU,
    } = input;
    let errors = {};
    errors.check = "failed";

    if (!Name) {
      errors.Name = "Name is required.";
    } else if (Name.length !== 0) {
      if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(Name) || Name.length > 25) {
        errors.Name =
          "First letter must be uppercase and do not start with a number";
      }
    }

    if (!LastName) {
      errors.LastName = "Last name is required.";
    } else if (LastName.length !== 0) {
      if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(LastName) || LastName.length > 25) {
        errors.LastName =
          "First letter must be uppercase and do not start with a number";
      }
    }

    if (!CompanyName) {
      errors.CompanyName = "Company name is required.";
    } else if (CompanyName.length !== 0) {
      if (
        !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(CompanyName) ||
        CompanyName.length > 100
      ) {
        errors.CompanyName =
          "First letter must be uppercase and do not start with a number";
      }
    }

    if (!FiscalAddress) {
      errors.FiscalAddress = "Fiscal address is required.";
    } else if (FiscalAddress.length !== 0) {
      if (
        !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(FiscalAddress) ||
        FiscalAddress.length > 300
      ) {
        errors.FiscalAddress =
          "First letter must be uppercase and do not start with a number";
      }
    }

    if (!ID) {
      errors.ID = "ID is required.";
    } else if (ID.length !== 0) {
      if (!/^\d{8}(?:[-\s]\d{4})?$/.test(ID)) {
        errors.ID = "Invalid format";
      }
    }

    if (!NumberPhone) {
      errors.NumberPhone = "Number phone is required.";
    } else if (NumberPhone.length !== 0) {
      if (
        !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
          NumberPhone
        )
      ) {
        errors.NumberPhone = "Invalid format";
      }
    }

    if (!CUIT) {
      errors.CUIT = "CUIT is required.";
    } else if (CUIT.length !== 0) {
      if (!/^([0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9]{1})$/g.test(CUIT)) {
        errors.CUIT = "Invalid format";
      }
    }

    if (!CBU) {
      errors.CBU = "CBU is required.";
    } else if (CBU.length !== 0) {
      if (!/^[0-9]+$/.test(CBU) ||CBU.length < 6 || CBU.length > 22) {
        errors.CBU = "Invalid format";
      }
    }

    if (
      !errors.Name &&
      !errors.LastName &&
      !errors.CompanyName &&
      !errors.FiscalAddress &&
      !errors.ID &&
      !errors.NumberPhone &&
      !errors.CUIT &&
      !errors.CBU
    ) {
      errors.check = "approved";
    }
    return errors;
  }

  const [errors, setErrors] = useState({});

  let [input, setInput] = useState({
    Name: "",
    LastName: "",
    CompanyName: "",
    FiscalAddress: "",
    ID: "",
    NumberPhone: "",
    CUIT: "",
    CBU: "",
    Email: ""
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (errors.check !== "approved") {
      swal("Not created","","error");
    } else {
      userRegister({
        Name: input.Name,
        Username: input.CompanyName,
        LastName: input.LastName,
        Company: input.CompanyName,
        Address: input.FiscalAddress,
        DNI: input.ID,
        Phone: input.NumberPhone,
        CUIT: input.CUIT,
        CBU: input.CBU,
        Email: input.Email
      });
      setInput({
        Name: "",
        LastName: "",
        CompanyName: "",
        FiscalAddress: "",
        ID: "",
        NumberPhone: "",
        CUIT: "",
        CBU: "",
      });
    }
  }

  return (
    <Box bg='#EEEEEE' minHeight="100vh">
      <Nav />
      <Flex justifyContent="center">
        <Box bg="gray" width="55%" padding={4} marginTop={4} borderRadius="2%">
          <Heading as="h1" color="white" fontSize="2em" textAlign="center">
            Become a Partner
          </Heading>

          <form autocomplete="off">
            <FormControl isRequired marginTop={4} isInvalid={errors.Name}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={input.Name}
                id="Name"
                name="Name"
                placeholder="Name"
                variant="flushed"
                required
                _placeholder={{ opacity: 0.3, color: "inherit" }}
                onChange={(e) => handleChange(e)}
              />
              {errors.Name && (
                <FormErrorMessage color="red">{errors.Name}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isRequired marginTop={4} isInvalid={errors.LastName}>
              <FormLabel>Last name</FormLabel>
              <Input
                type="text"
                value={input.LastName}
                id="LastName"
                name="LastName"
                placeholder="Last name"
                variant="flushed"
                required
                _placeholder={{ opacity: 0.3, color: "inherit" }}
                onChange={(e) => handleChange(e)}
              />
              {errors.LastName && <FormErrorMessage color="red">{errors.LastName}</FormErrorMessage>}
            </FormControl>

            <FormControl
              isRequired
              marginTop={4}
              isInvalid={errors.CompanyName}
            >
              <FormLabel>Company name</FormLabel>
              <Input
                type="text"
                value={input.CompanyName}
                id="CompanyName"
                name="CompanyName"
                placeholder="Company name"
                variant="flushed"
                required
                _placeholder={{ opacity: 0.3, color: "inherit" }}
                onChange={(e) => handleChange(e)}
              />
              {errors.CompanyName && (
                <FormErrorMessage color="red">{errors.CompanyName}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isRequired
              marginTop={4}
              isInvalid={errors.FiscalAddress}
            >
              <FormLabel>Fiscal address</FormLabel>
              <Input
                type="text"
                value={input.FiscalAddress}
                id="FiscalAddress"
                name="FiscalAddress"
                placeholder="Fiscal address"
                variant="flushed"
                required
                _placeholder={{ opacity: 0.3, color: "inherit" }}
                onChange={(e) => handleChange(e)}
              />
              {errors.FiscalAddress && (
                <FormErrorMessage color="red">{errors.FiscalAddress}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isRequired marginTop={4} isInvalid={errors.ID}>
              <FormLabel>ID</FormLabel>
              <Input
                type="text"
                value={input.ID}
                id="ID"
                name="ID"
                placeholder="ID"
                variant="flushed"
                required
                _placeholder={{ opacity: 0.3, color: "inherit" }}
                onChange={(e) => handleChange(e)}
              />
              {FormErrorMessage.ID && <Text color="red">{errors.ID}</Text>}
            </FormControl>

            <FormControl
              isRequired
              marginTop={4}
              isInvalid={errors.NumberPhone}
            >
              <FormLabel>Number phone</FormLabel>
              <Input
                type="text"
                value={input.NumberPhone}
                id="NumberPhone"
                name="NumberPhone"
                placeholder="Number phone"
                variant="flushed"
                required
                _placeholder={{ opacity: 0.3, color: "inherit" }}
                onChange={(e) => handleChange(e)}
              />
              {errors.NumberPhone && (
                <FormErrorMessage color="red">{errors.NumberPhone}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isRequired marginTop={4} isInvalid={errors.CUIT}>
              <FormLabel>CUIT</FormLabel>
              <Input
                type="text"
                value={input.CUIT}
                id="CUIT"
                name="CUIT"
                placeholder="CUIT"
                variant="flushed"
                required
                _placeholder={{ opacity: 0.3, color: "inherit" }}
                onChange={(e) => handleChange(e)}
              />
              {errors.CUIT && <FormErrorMessage color="red">{errors.CUIT}</FormErrorMessage>}
            </FormControl>

            <FormControl isRequired marginTop={4} isInvalid={errors.CBU}>
              <FormLabel>CBU</FormLabel>
              <Input
                type="text"
                value={input.CBU}
                id="CBU"
                name="CBU"
                placeholder="CBU"
                variant="flushed"
                required
                _placeholder={{ opacity: 0.3, color: "inherit" }}
                onChange={(e) => handleChange(e)}
              />
              {errors.CBU && <FormErrorMessage color="red">{errors.CBU}</FormErrorMessage>}
            </FormControl>

            <FormControl isRequired marginTop={4} >
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                value={input.Email}
                id="Email"
                name="Email"
                placeholder="Email"
                variant="flushed"
                required
                _placeholder={{ opacity: 0.3, color: "inherit" }}
                onChange={(e) => handleChange(e)}
              />
             
            </FormControl>


            <Center>
              <Button
                marginTop={4}
                onClick={(e) => handleSubmit(e)}
                bg="#FD7014"
                color="#EEEEEE"
                _hover={{ bg: "#EEEEEE", color: "black" }}
                disabled={
                  Object.keys(errors).length
                    ? errors.check === "approved"
                      ? false
                      : true
                    : true
                }
              >
                Create
              </Button>
            </Center>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default FormPartner;
