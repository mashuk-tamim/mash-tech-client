import swal from "sweetalert";

const AddReview = () => {
    const handleAddReview = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const body = form.body.value;
        const image = form.image.value;

        const review = {
            name,
            body,
            image,
        };

        //send data to server
        fetch("http://localhost:5000/testimonials", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal.fire({
                        title: "Review Posted Successfully",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                    });
                    form.reset();
                }
            });
    };
    return (
        <div>
            <h2 className="text-4xl text-center font-bold pt-3">Add Review</h2>
            <form
                onSubmit={handleAddReview}
                className="space-y-5 p-5 w-full md:w-2/3 lg:w-1/2 mx-auto"
            >
                <div className="form-control">
                    <input
                        type="text"
                        name="name"
                        placeholder="author name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="body"
                        placeholder="short review"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="image"
                        placeholder="image URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="">
                    <input
                        type="submit"
                        value="Add"
                        className="btn btn-success w-full"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddReview;