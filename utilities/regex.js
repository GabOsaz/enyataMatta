export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/


{/* <form onSubmit={handleSubmit(onSubmit)} className="mt-[62px] flex flex-col space-y-8">
            <div className="w-[335px]">
                <Controller
                    render={({ field }) => (
                        <Input 
                            id="Email Address" 
                            label="Email Address" 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            register={register} 
                            validation={{required: true, pattern: re}} 
                            {...field}
                        />
                    )}
                    name="TextField"
                    control={control}
                />
            </div>
            <div className="w-[335px]">
                <Controller
                    render={({ field }) => (
                        <Input 
                            type='password'
                            id="Password" 
                            label="Password" 
                            register={register} 
                            validation={{required: true, minLength: 8, pattern: '[A-Za-z0-9]'}}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            {...field}
                        />
                    )}
                    name="TextField"
                    control={control}
                />
                {/* <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label='Password'
                    type='password'
                    register={register} 
                    validation={{required: true, minLength: 8, pattern: '[A-Za-z0-9]'}}
                /> */}
