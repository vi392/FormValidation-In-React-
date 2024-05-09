
import React from "react";
import { useForm } from 'react-hook-form';


function Reactform() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-md-12">

                        <form onSubmit={handleSubmit()}>

                            {/* <div className="sign-up"> */}
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h2>React-registration-form</h2>
                                    </div>

                                    <section className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-level">Username</label>
                                            <input type="text" className="form-control" {...register("username", { required: true, minLength: 5, maxLength: 10 })} />
                                            {errors.username && <div className="form-text text-danger" >filled is required </div>}
                                        </div>
                                    </section>

                                    <section className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-level">Email</label>
                                            <input type="text" className="form-control" {...register("email", { required: true, })} />
                                            {errors.email && <div class="form-text text-danger" >email is required </div>}
                                        </div>
                                    </section>

                                    <section className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-level">Phone-no</label>
                                            <input type="text" className="form-control" {...register("phone-no", { required: true })} />
                                            {errors.email && <div class="form-text text-danger" >Phone number is required </div>}
                                        </div>
                                    </section>

                                    <section className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-level">Date</label>
                                            <input type="date" className="form-control" {...register("date", { required: true })} />
                                            {errors.email && <div class="form-text text-danger" >date is required </div>}
                                        </div>
                                    </section>

                                    <section className="col-md-6">
                                        <label className="form-label" {...register("gender", { required: true })}> Gender</label>
                                        <select className="form-control">
                                            <option hidden>Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>

                                        </select>
                                    </section>

                                    <section className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-level">Pincode</label>
                                            <input type="text" className="form-control" {...register("pincode", { required: true, minLength: 2, maxLength: 8 })} />
                                            {errors.address && <div class="form-text text-danger" >pincode is required </div>}
                                        </div>
                                    </section>


                                    <section className='col-md-6'>
                                        <div className="mb-3">
                                            <label class="form-label">Address</label>

                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a comment here" {...register("address", { required: true, minLength: 5, maxLength: 100 })}></textarea>
                                                {errors.address && <div class="form-text text-danger" >filled is required </div>}
                                            </div>
                                        </div>
                                    </section>


                                    <section className="col-md-12 text-center">

                                        <input type="submit" value="submit" className='btn btn-success me-2' />
                                        <input type="submit" value="Reset" className='btn btn-success' />
                                    </section>




                                </div>
                            {/* </div> */}
                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Reactform;