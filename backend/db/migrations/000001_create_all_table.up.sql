CREATE TABLE public.users (
                              id varchar NOT NULL,
                              fullname varchar NOT NULL,
                              email_address varchar NOT NULL,
                              phone_number varchar NOT NULL,
                              "password" varchar NOT NULL,
                              created_at varchar NOT NULL,
                              updated_at varchar NULL,
                              deleted_at timestamp NULL,
                              CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE TABLE public.cities (
                               id varchar NOT NULL,
                               city varchar NOT NULL,
                               created_at varchar NOT NULL,
                               updated_at varchar NULL,
                               deleted_at timestamp NULL,
                               CONSTRAINT cities_pk PRIMARY KEY (id)
);

CREATE TABLE public.address (
                                id varchar NOT NULL,
                                "name" varchar NOT NULL,
                                city_id varchar NOT NULL,
                                postal_code int4 NULL,
                                created_at varchar NOT NULL,
                                updated_at varchar NULL,
                                deleted_at timestamp NULL,
                                user_id varchar NOT NULL,
                                CONSTRAINT address_pk PRIMARY KEY (id),
                                CONSTRAINT address_city_fk FOREIGN KEY (city_id) REFERENCES public.cities(id),
                                CONSTRAINT address_users_fk FOREIGN KEY (user_id) REFERENCES public.users(id)
);

CREATE TABLE public.category_status (
                                        id varchar NOT NULL,
                                        "name" varchar NULL,
                                        CONSTRAINT category_status_pk PRIMARY KEY (id)
);

CREATE TABLE public.status (
                               id varchar NOT NULL,
                               category_status_id varchar NOT NULL,
                               "name" varchar NULL,
                               created_at varchar NOT NULL,
                               updated_at varchar NULL,
                               deleted_at timestamp NULL,
                               color varchar NULL,
                               CONSTRAINT status_pk PRIMARY KEY (id),
                               CONSTRAINT status_category_status_fk FOREIGN KEY (category_status_id) REFERENCES public.category_status(id)
);

CREATE TABLE public.weight_units (
                                     id varchar NOT NULL,
                                     unit_name varchar NOT NULL,
                                     CONSTRAINT productweight_pk PRIMARY KEY (id)
);
CREATE TABLE public.product_categories (
                                           id varchar NOT NULL,
                                           category_name varchar NOT NULL,
                                           CONSTRAINT product_category_pk PRIMARY KEY (id)
);
CREATE TABLE public.products (
                                 id varchar NOT NULL,
                                 "name" varchar NOT NULL,
                                 product_category_id varchar NOT NULL,
                                 status_id varchar NOT NULL,
                                 price int8 NOT NULL,
                                 created_at varchar NOT NULL,
                                 updated_at varchar NULL,
                                 deleted_at timestamp NULL,
                                 CONSTRAINT products_pk PRIMARY KEY (id),
                                 CONSTRAINT products_productcategory_fk FOREIGN KEY (product_category_id) REFERENCES public.product_categories(id),
                                 CONSTRAINT products_status_fk FOREIGN KEY (status_id) REFERENCES public.status(id)
);

CREATE TABLE public.product_volumes (
                                        id varchar NOT NULL,
                                        product_id varchar NOT NULL,
                                        width int4 NOT NULL,
                                        height int4 NOT NULL,
                                        length int4 NOT NULL,
                                        created_at varchar NOT NULL,
                                        updated_at varchar NULL,
                                        deleted_at timestamp NULL,
                                        CONSTRAINT productvolume_pk PRIMARY KEY (id),
                                        CONSTRAINT productvolume_product_fk FOREIGN KEY (product_id) REFERENCES public.products(id)
);

CREATE TABLE public.product_stocks (
                                       id varchar NOT NULL,
                                       product_id varchar NOT NULL,
                                       total int4 NOT NULL,
                                       not_reserved int4 NOT NULL,
                                       reserved int4 NOT NULL,
                                       created_at varchar NOT NULL,
                                       updated_at varchar NULL,
                                       deleted_at timestamp NULL,
                                       CONSTRAINT productstocks_pk PRIMARY KEY (id),
                                       CONSTRAINT productstocks_fk FOREIGN KEY (product_id) REFERENCES public.products(id)
);

