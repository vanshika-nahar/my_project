import React, { useState } from "react";
import {
    TextField,
    Button,
    Container,
    Typography,
    Paper,
    Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import Swal from "sweetalert2"; // Assuming you're using SweetAlert2

interface FormData {
    name: string;
    phoneNumber: string;
    email: string;
}

function Form() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phoneNumber: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!formData.name || !formData.phoneNumber || !formData.email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all fields before submitting!",
            });
            return;
        }

        alert(JSON.stringify(formData));
        localStorage.setItem("userData", JSON.stringify(formData));
        Swal.fire({
            icon: "success",
            title: "Done",
            text: "Information Submitted Successfully",
        });
        navigate("/datatable");
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingInline: "30px",
                    paddingY: "35px",
                    bgcolor: "#fff",
                    borderRadius: 5,
                }}
            >
                <Typography
                    sx={{
                        color: "#000",
                        textAlign: "center",
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                    variant="h4"
                    gutterBottom
                >
                    Provide Your Details&nbsp;
                    <InfoIcon sx={{ color: "#000", fontSize: "35px" }} />
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid
                        container
                        spacing={1}
                        sx={{ borderTop: "1px solid #ced6e0", mt: "10px" }}
                    >
                        <Grid item xs={12}>
                            <TextField
                            sx={{background:"#fff"}}
                                label="Name"
                                variant="outlined"
                                fullWidth
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            sx={{background:"#fff"}}
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            sx={{background:"#fff"}}
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: "5px",
                                    px: "40px",
                                    backgroundColor: "#3742fa",
                                    color: "#fff",
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Form;
