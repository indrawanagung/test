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
                                 image varchar NOT NULL,
                                 created_at varchar NOT NULL,
                                 updated_at varchar NULL,
                                 deleted_at timestamp NULL,
                                 CONSTRAINT products_pk PRIMARY KEY (id),
                                 CONSTRAINT products_productcategory_fk FOREIGN KEY (product_category_id) REFERENCES public.product_categories(id),
                                 CONSTRAINT products_status_fk FOREIGN KEY (status_id) REFERENCES public.status(id)
);





CREATE TABLE public.variations (
                                   id varchar NOT NULL,
                                   variation_name varchar NOT NULL,
                                   created_at varchar NOT NULL,
                                   updated_at varchar NULL,
                                   deleted_at timestamp NULL,
                                   CONSTRAINT variations_pk PRIMARY KEY (id)
);
CREATE TABLE public.variation_options (
                                          id varchar NOT NULL,
                                          variation_id varchar NOT NULL,
                                          option_name varchar NOT NULL,
                                          description varchar NULL,
                                          created_at varchar NOT NULL,
                                          updated_at varchar NULL,
                                          deleted_at timestamp NULL,
                                          product_id varchar NULL,
                                          CONSTRAINT variationoptions_pk PRIMARY KEY (id),
                                          CONSTRAINT variation_options_fk FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE RESTRICT ON UPDATE CASCADE,
                                          CONSTRAINT variationoptions_variation_fk FOREIGN KEY (variation_id) REFERENCES public.variations(id)
);

CREATE TABLE public.product_stocks (
                                       id varchar NOT NULL,
                                       variation_option_id varchar NOT NULL,
                                       not_reserved int4 NOT NULL,
                                       reserved int4 NOT NULL,
                                       created_at varchar NOT NULL,
                                       updated_at varchar NULL,
                                       deleted_at timestamp NULL,
                                       CONSTRAINT productstocks_pk PRIMARY KEY (id),
                                       CONSTRAINT product_stocks_fk FOREIGN KEY (variation_option_id) REFERENCES public.variation_options(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE public.product_volumes (
                                        id varchar NOT NULL,
                                        variation_option_id varchar NOT NULL,
                                        width int4 NOT NULL,
                                        height int4 NOT NULL,
                                        length int4 NOT NULL,
                                        created_at varchar NOT NULL,
                                        updated_at varchar NULL,
                                        deleted_at timestamp NULL,
                                        weight int4 NULL,
                                        weight_unit_id varchar NULL,
                                        CONSTRAINT product_volumes_pk PRIMARY KEY (id),
                                        CONSTRAINT product_volumes_fk FOREIGN KEY (weight_unit_id) REFERENCES public.weight_units(id) ON DELETE RESTRICT ON UPDATE CASCADE,
                                        CONSTRAINT product_volumes_fk2 FOREIGN KEY (variation_option_id) REFERENCES public.variation_options(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

INSERT INTO public.cities
(id, city, created_at, updated_at, deleted_at)
VALUES('1', 'makassar', '1707660761', NULL, NULL);
INSERT INTO public.cities
(id, city, created_at, updated_at, deleted_at)
VALUES('2', 'surabaya', '1707660761', NULL, NULL);


INSERT INTO public.category_status
(id, "name")
VALUES('1', 'warehouse');
INSERT INTO public.category_status
(id, "name")
VALUES('2', 'product');
INSERT INTO public.category_status
(id, "name")
VALUES('3', 'payment');
INSERT INTO public.category_status
(id, "name")
VALUES('4', 'order');

INSERT INTO public.product_categories
(id, category_name)
VALUES('2', 'Fruits');
INSERT INTO public.product_categories
(id, category_name)
VALUES('1', 'Vegetables');
INSERT INTO public.product_categories
(id, category_name)
VALUES('3', 'Cold Drinks');
INSERT INTO public.product_categories
(id, category_name)
VALUES('4', 'Snacks');

INSERT INTO public.status
(id, category_status_id, "name", created_at, updated_at, deleted_at, color)
VALUES('1', '1', 'active', '1707660761', NULL, NULL, NULL);
INSERT INTO public.status
(id, category_status_id, "name", created_at, updated_at, deleted_at, color)
VALUES('2', '2', 'disable', '1707660761', NULL, NULL, NULL);
INSERT INTO public.status
(id, category_status_id, "name", created_at, updated_at, deleted_at, color)
VALUES('3', '3', 'active', '1707660761', NULL, NULL, NULL);
INSERT INTO public.status
(id, category_status_id, "name", created_at, updated_at, deleted_at, color)
VALUES('4', '3', 'expired', '1707660761', NULL, NULL, NULL);
INSERT INTO public.status
(id, category_status_id, "name", created_at, updated_at, deleted_at, color)
VALUES('5', '4', 'Menunggu Pembayaran', '1707660761', NULL, NULL, 'orange-500');
INSERT INTO public.status
(id, category_status_id, "name", created_at, updated_at, deleted_at, color)
VALUES('7', '4', 'Telah Dikirim', '1707660761', NULL, NULL, 'green-500');
INSERT INTO public.status
(id, category_status_id, "name", created_at, updated_at, deleted_at, color)
VALUES('6', '4', 'Dalam Proses', '1707660761', NULL, NULL, 'orange-500');
INSERT INTO public.products
(id, "name", product_category_id, status_id, price, image, created_at, updated_at, deleted_at)
VALUES('1', 'Kacang Almond', '1', '1', 10000, 'product1.jpg', '123', '123', NULL);


INSERT INTO public.weight_units
(id, unit_name)
VALUES('1', 'Gram');
INSERT INTO public.weight_units
(id, unit_name)
VALUES('2', 'Kilo Gram');

INSERT INTO public.variations
(id, variation_name, created_at, updated_at, deleted_at)
VALUES('1', 'Berat', '123', '123', NULL);

INSERT INTO public.variation_options
(id, variation_id, option_name, description, created_at, updated_at, deleted_at, product_id)
VALUES('1', '1', '500 Gram', 'Berat 500 Gram per unit', '123', '123', NULL, '1');


INSERT INTO public.product_volumes
(id, variation_option_id, width, height, length, created_at, updated_at, deleted_at, weight, weight_unit_id)
VALUES('1', '1', 123, 123, 123, '123', '123', NULL, 100, '1');


INSERT INTO public.product_stocks
(id, variation_option_id, not_reserved, reserved, created_at, updated_at, deleted_at)
VALUES('1', '1', 8, 2, '123', '123', NULL);




