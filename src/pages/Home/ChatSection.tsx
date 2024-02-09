const ChatSection = () => {
  return (
    <section className="flex h-screen flex-col bg-red-100">
      <div className="h-12 bg-black p-2 text-white">USERNAME</div>

      <div className="flex flex-1 flex-col-reverse gap-2 overflow-x-hidden overflow-y-scroll p-2">
        <div className="bg-blue-200">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div className="bg-blue-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          accusamus, iste temporibus esse officiis autem quo, vitae numquam ex
          quae cupiditate illo, quibusdam cum a sit quam aperiam dolorem aliquam
          quisquam cumque. Similique libero reprehenderit eum dolore nisi
          possimus! Cumque libero veniam, officiis sint nobis harum ipsam
          pariatur aperiam amet aliquid, quibusdam hic expedita maiores delectus
          est non quam at iure ipsa ab. Atque, dignissimos ipsum aliquid modi
          odio ut labore tenetur iste iusto odit corrupti distinctio similique
          quos, deleniti tempore delectus dolores sequi consequuntur voluptates
          obcaecati itaque? Reiciendis delectus fugiat adipisci aperiam,
          pariatur perferendis voluptatem a labore inventore eaque tenetur magni
          blanditiis quos enim perspiciatis odio unde. Perspiciatis praesentium
          alias eligendi, molestias, blanditiis distinctio rerum repellat eius
          provident, iste consectetur omnis. Repudiandae asperiores veritatis,
          officiis laboriosam veniam voluptatibus magni fugiat esse beatae,
          quibusdam necessitatibus eius, perferendis quam quas! Facilis
          praesentium, explicabo expedita laudantium itaque consequuntur quo
          distinctio magnam a necessitatibus pariatur eaque, voluptas harum
          reiciendis repudiandae repellendus incidunt accusantium delectus
          quibusdam, fugiat exercitationem ut! Magnam non pariatur eligendi quam
          eius tenetur reiciendis, voluptatum ut similique a commodi omnis est
          incidunt numquam voluptatem repudiandae labore, voluptate recusandae
          dignissimos nihil sequi. Inventore quas sit nisi mollitia consequuntur
          blanditiis. Eum, voluptate veritatis!
        </div>
        <div className="bg-blue-200">hi 3</div>
        <div className="bg-blue-200">hi 4</div>
        <div className="bg-blue-200">hi 4</div>
      </div>

      <form className="h-24 bg-green-200 p-2">
        <input type="text" className="mb-2 w-full rounded-md px-4 py-2" />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-purple-800 px-3 py-1 text-white"
          >
            Chat
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChatSection;
