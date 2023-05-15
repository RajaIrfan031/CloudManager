const Test = () =>{

    const cats = [
        {
            name: 'Fluffikins',
            breed: 'Orange tabby',
            url: 'https://www.thesprucepets.com/thmb/whvFIY9Epn7ITmGk1pfYMuHCRO0=/1471x0/filters:no_upscale():strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut eligendi facilis neque officia nulla quaerat, blanditiis rem nobis minus.',
            age: 8
        },
        {
            name: 'Blizzard',
            breed: 'Calico',
            url: 'https://www.thesprucepets.com/thmb/4H4K_nta-Zvv4yJgndStugkeqtg=/2782x0/filters:no_upscale():strip_icc()/calico-cats-profile-554694-hero-c7ba9806ce1f4fb1b4d4edc2fd820a0d.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut eligendi facilis neque officia nulla quaerat, blanditiis rem nobis minus.',
            age: 8
        },
        {
            name: 'Garfield',
            breed: 'Maine coon',
            url: 'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Maine-Coon-Cat.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut eligendi facilis neque officia nulla quaerat, blanditiis rem nobis minus.',
            age: 8
        },
        {
            name: 'Puffins',
            breed: 'Bengals',
            url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F20%2Fbengal-wood-walking-867775498-2000.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut eligendi facilis neque officia nulla quaerat, blanditiis rem nobis minus.',
            age: 8
        },
    ]

    return (
        <>
            <div className="bg-black mx-8 w-full h-screen">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex-col flex-1 max-w-32">
                        <img src={cats[0].url} alt="" width={250}/>
                        <div className="mx-4">
                            <h1>{cats[0].name}</h1>
                            <p>{cats[0].breed}</p>
                            <p>{cats[0].description}</p>
                        </div>
                    </div>
                    <div className="flex-col flex-1">
                        <img src={cats[0].url} alt="" width={250}/>
                        <div className="mx-4">
                            <h1>{cats[0].name}</h1>
                            <p>{cats[0].breed}</p>
                            <p>{cats[0].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Test;